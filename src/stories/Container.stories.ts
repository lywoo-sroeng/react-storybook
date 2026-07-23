import type { Meta, StoryObj } from '@storybook/react-vite'
import Container from './Container'

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Container content',
  },
}
