import type { NextPage } from "next";
import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import { Container, Typography, Box, Button } from "@mui/material";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(status);
  console.log(session);

  return (
    <Fragment>
      <Head>
        <title>Starter</title>
        <meta name="description" content="Starter template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        {status === "loading" ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example
            </Typography>
            <Link href="/about" passHref>
              <Button variant="contained" color="primary">
                Go to the about page
              </Button>
            </Link>
            {session ? (
              <Fragment>
                <Link href="/profile" passHref>
                  <Button variant="contained" color="primary">
                    Go to my Profile
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => signIn()}
                >
                  Sign In
                </Button>
              </Fragment>
            )}
          </Box>
        )}
      </Container>
    </Fragment>
  );
};

export default Home;
