import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Suspense fallback={''}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        element={(
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        )}
                        path={path}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
