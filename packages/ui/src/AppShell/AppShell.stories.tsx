import {AppShell} from ".";
import {ComponentMeta, ComponentStory} from "@storybook/react"

export default {
    title: "AppShell",
    component: AppShell
} as ComponentMeta<typeof AppShell>

const Template: ComponentStory<typeof AppShell> = (args)=>(
        <AppShell {...args} ></AppShell>
)

export const Primary = Template.bind({})
Primary.args = {
    title: "Brand"
}