import { mount } from '@vue/test-utils';
import Hello from '../components/HelloWorld.vue';

it('content', async () => {
  const Comp = {
    template: '<div><Hello msg="Hello Jest"/></div>',
  };
  const wrapper = mount(Comp, {
    global: {
      components: {
        Hello,
      },
    },
  });
  // 最简单的测试用例查看是否包含Hello Jest文字。
  expect(wrapper.findComponent(Hello).text()).toContain('Hello Jest');

  const button = await wrapper.get('[type="button"]');
  await button.trigger('click');
  await button.trigger('click');

  expect(wrapper.findComponent(Hello).text()).toContain('count is: 2');
  const Comp1 = {
    template: '<div><Hello/></div>',
  };
  const wrapper1 = mount(Comp1, {
    global: {
      components: {
        Hello,
      },
    },
  });
  const button1 = await wrapper1.get('[type="button"]');
  await button1.trigger('click');
  await button1.trigger('click');

  expect(wrapper1.findComponent(Hello).text()).toContain('count is: 3');
});
