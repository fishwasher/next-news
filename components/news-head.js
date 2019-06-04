import Head from 'next/head';

const CustomHead = props => (
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
    {props.description ?
      <meta key="description" name="description" content={props.description} />
      : null}
    {props.children}
  </Head>
);

export default CustomHead;
