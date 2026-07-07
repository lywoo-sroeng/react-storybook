import type { Meta, StoryObj } from '@storybook/react-vite'
import Popover from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'Example/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Popover content',
  },
}
