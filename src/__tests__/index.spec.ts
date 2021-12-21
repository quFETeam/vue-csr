import { createApp } from 'vue';

it('should support on-the-fly template compilation', () => {
  const container = document.createElement('div');
  const App = {
    template: '{{ count }}',
    data() {
      return {
        count: 0,
      };
    },
  };
  createApp(App).mount(container);
  // 断言
  expect(container.innerHTML).toBe('0');
});
