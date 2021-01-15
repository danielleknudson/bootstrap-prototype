import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { groupBy } from '../helpers'
import styled, { css } from 'styled-components'

interface NavRoute {
    path: string,
    exact: boolean,
    text: string,
    group?: string,
    main: () => JSX.Element
}

export type SidebarNavLayoutProps = {
    routes: NavRoute[],
    primary: boolean,
}

/**
 * 
 * @param routes An array of NavRoutes 
 */
export const SidebarNavLayout = ({ routes, primary}: SidebarNavLayoutProps) => {
    
    const groupedRoutes = groupBy(routes, 'group')
    const bgColor = primary ? 'bg-primary' : 'bg-light'
    return (
      <Router>
        <Row className="align-items-stretch">
          <Col md={3} className={`sidebar ${bgColor}`}>
            <div className="sidebar-sticky">
            <Navbar expand="md" variant={primary ? 'dark' : 'light'}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="py-24">
                <Nav className="flex-column w-100">
                    {
                    Object.keys(groupedRoutes).map((key, index) => {
                        // use keyName to get current key's name
                        // and a[keyName] to get its value
                        return (
                        <div key={index}>
                            <h6 className="text-uppercase pl-8 mb-8">{key}</h6>
                            {
                            groupedRoutes[key].map((route: NavRoute, index: number) => (
                                <NavItem key={index}>
                                    <LinkContainer to={route.path}>
                                    <NavLink className="">{route.text}</NavLink>
                                    </LinkContainer>
                                </NavItem>
                            ))
                            }
                        </div>
                        )
                    })
                    }
                    
                </Nav>
            </Navbar.Collapse>
            </Navbar>
                <Switch>
                  {
                    Object.keys(groupedRoutes).map((key) => (
                      groupedRoutes[key].map((route: NavRoute, index: number) => (
                        <Route
                          key={`route-link-${index}`}
                          path={route.path}
                          exact={route.exact}
                        />
                      ))
                    ))
                  }
                </Switch>
            </div>
          </Col>
          <Col xs={12} md={9}>
            <Switch>
                {
                Object.keys(groupedRoutes).map((key) => (
                    groupedRoutes[key].map((route: NavRoute, index: number) => (
                    <Route
                        key={`route-content-${index}`}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                    ))
                ))
                }
            </Switch>
          </Col>
        </Row>
      </Router>
    )
}