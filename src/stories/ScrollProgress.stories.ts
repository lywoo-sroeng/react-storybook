import type { Meta, StoryObj } from '@storybook/react-vite'
import ScrollProgress from './ScrollProgress'

const meta: Meta<typeof ScrollProgress> = {
  title: 'Example/ScrollProgress',
  component: ScrollProgress,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
