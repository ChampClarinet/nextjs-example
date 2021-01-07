import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomerDocument extends Document {

    //? Customize template HTML file here.
    render() {
        return (
            <Html>
                <Head>
                    {/* Inject any meta, link, css or title here. */}
                    <meta property="test" content="this is custom meta" />
                </Head>
                <body>
                    <Main />
                </body>
                {/* Inject any additional javascript here */}
                <NextScript />
            </Html>
        )
    }

}