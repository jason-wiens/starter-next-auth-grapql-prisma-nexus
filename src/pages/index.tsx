import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Typography, Box, Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Starter</title>
        <meta name="description" content="Starter template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" passHref>
            <Button variant="contained" color="primary">
              Go to the about page
            </Button>
          </Link>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
