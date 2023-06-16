import Card from "./Card"

export const options = {
  colors: ['base', 'primary', 'secondary'] as Array<'base' | 'primary' | 'secondary'>,
  sizes: ['sm', 'md', 'lg'] as Array<'sm' | 'md' | 'lg'>,
}
export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => <Card>Default</Card>
export const Colors = () => options.colors.map((color,index) => <Card color={color} key={index}>Default</Card> ) 
export const Sizes = () => options.sizes.map((size,index) => <Card size={size} key={index}>Default</Card> )