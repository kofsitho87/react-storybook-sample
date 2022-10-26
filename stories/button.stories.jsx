import React from 'react'
import Button from '../components/Button'


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};