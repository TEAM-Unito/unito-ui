import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['indigo', 'magenta', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'indigo',
    size: 'medium',
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Indigo: Story = {
  args: {
    variant: 'indigo',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">詳細</Button>',
  }),
}

export const Magenta: Story = {
  args: {
    variant: 'magenta',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">詳細</Button>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">詳細</Button>',
  }),
}

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" @click="args.onClick">詳細</Button>',
  }),
}

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" @click="args.onClick">詳細</Button>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" @click="args.onClick">詳細</Button>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button variant="indigo">詳細</Button>
        <Button variant="magenta">詳細</Button>
        <Button variant="danger">詳細</Button>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <Button size="small">詳細</Button>
        <Button size="medium">詳細</Button>
        <Button size="large">詳細</Button>
      </div>
    `,
  }),
}
