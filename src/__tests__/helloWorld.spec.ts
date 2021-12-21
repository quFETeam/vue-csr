import { mount } from '@vue/test-utils';
import Hello from '../components/HelloWorld.vue';

it('content', () => {
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
});
