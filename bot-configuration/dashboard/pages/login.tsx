import Head from "next/head";
import {useEffect} from "react";

const Login = (_props: any) => {
    useEffect(() => {
        window.location.href = "/api/login"
    });

    return <>
        <Head>
            <title>Logging In | Resonix</title>
        </Head>
        <p>Redirecting you to login...</p>
    </>
}


export default Login
