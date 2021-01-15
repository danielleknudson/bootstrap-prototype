import { SidebarNavLayout, SidebarNavLayoutProps } from './SidebarNavLayout'
import { Story } from '@storybook/react/types-6-0'
import { callback } from '../stories/helpers'

const ROUTES = [
    {
      path: '/submissions',
      exact: true,
      text: 'All submissions',
      group: 'Submissions',
      main: callback(() => <></>)
    },
    {
      path: '/submission/drafts',
      exact: true,
      text: 'Draft',
      group: 'Submissions',
      main: callback(() => <></>)
    },
    {
      path: '/submission/declined',
      exact: true,
      text: 'Declined',
      group: 'Submissions',
      main: callback(() => <></>)
    },
    {
      path: '/submission/quoted',
      exact: true,
      text: 'Quoted',
      group: 'Submissions',
      main: callback(() => <></>)
    },
    {
      path: '/policies',
      exact: true,
      text: 'All policies',
      group: 'Policies',
      main: callback(() => <></>)
    },
    {
      path: '/policies/bound',
      exact: true,
      text: 'Bound',
      group: 'Policies',
      main: callback(() => <></>)
    },
    {
      path: '/policies/expired',
      exact: true,
      text: 'Expired',
      group: 'Policies',
      main: callback(() => <></>)
    },
    {
      path: '/policies/issued',
      exact: true,
      text: 'Issued',
      group: 'Policies',
      main: callback(() => <></>)
    },
    {
      path: '/policies/canceled',
      exact: true,
      text: 'Canceled',
      group: 'Policies',
      main: callback(() => <></>)
    },
]

const SUBMISSION_ROUTES = [
    {
        path: '/risk/123/classOfBusiness',
        exact: true,
        text: 'Class of business',
        group: '',
        main: callback(() => <></>)
    },
    {
        path: '/risk/123/documents',
        exact: true,
        text: 'Documents',
        group: '',
        main: callback(() => <></>)
    },
    {
        path: '/risk/123/generalInformation',
        exact: true,
        text: 'General information',
        group: '',
        main: callback(() => <></>)
    },
    {
        path: '/risk/123/eligibility',
        exact: true,
        text: 'Eligibility',
        group: '',
        main: callback(() => <></>)
    },
    {
        path: '/risk/123/exposures',
        exact: true,
        text: 'Exposures',
        group: '',
        main: callback(() => <></>)
    },
    {
        path: '/risk/123/review',
        exact: true,
        text: 'Review',
        group: '',
        main: callback(() => <></>)
    },
]

export default {
    title: 'Layouts/SidebarNavLayout',
    component: SidebarNavLayout,
}
const Template: Story<SidebarNavLayoutProps> = (args) => <SidebarNavLayout {...args} />

export const PrimarySidebar = Template.bind({})
PrimarySidebar.args = {
    routes: ROUTES,
    primary: true
}

export const LightSidebar = Template.bind({})
LightSidebar.args = {
    routes: SUBMISSION_ROUTES,
    primary: false,
}