// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import StoryRouter from 'storybook-react-router'
import Container from 'react-bootstrap/Container'
import { jsxDecorator } from 'storybook-addon-jsx'
import '../src/custom.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    a11y: {
        element: '#root',
        config: {},
        options: {},
        manual: true,
    },
    backgrounds: {
        default: 'white',
        values: [
          {
            name: 'white',
            value: '#fff',
          },
          {
            name: 'black',
            value: '#000',
          },
        ],
      },
    options: {
        storySort: {
            order: ['Layouts'],
        },
    },
}

export const decorators = [
    jsxDecorator,
    StoryRouter(),
    (Story) => (
        <Container fluid className="h-100 bg-white">
            <Story />
        </Container>
    ),
]
