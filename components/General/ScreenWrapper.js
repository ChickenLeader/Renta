import Head from "next/head"
import React from "react"
import { ImportantVars } from "../../constants/ImportantVars"

const ScreenWrapper = ({
    children,
    pageTitle = '',
    pageDescription = ''
}) => {
    return (
        <div>
            <Head>
                {pageTitle ?
                    <title>
                        {`${pageTitle} | ${ImportantVars.websiteName}`}
                    </title>
                    :
                    null
                }
                {pageDescription ?
                    <meta
                        name="description"
                        content={pageDescription}
                    />
                    :
                    null
                }
            </Head>

            <main>{children}</main>
        </div>
    )
}

export default ScreenWrapper
