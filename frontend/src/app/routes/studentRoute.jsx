// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { AuthorityTypes, AppRoutes } from '../types';

import type { RouteProps } from './types';

const StudentRoute = ({ component, ...rest }: RouteProps): React.Node => {
    const { loggedIn, authorities } = useSelector(state => state.user);
    return (
        <Route
            {...rest}
            render={props =>
                loggedIn && authorities.includes(AuthorityTypes.STUDENT) ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect to={AppRoutes.HOME} />
                )
            }
        />
    );
};

export default StudentRoute;
