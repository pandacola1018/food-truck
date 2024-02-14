import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { Logo } from '../component/Logo';
  import { OAuthButtonGroup } from '../component/OAuthButtonGroup';
  import { PasswordField } from '../component/PasswordField';
  import {signInWithEmailAndPassword } from "firebase/auth";
  import Link from 'next/link';
  import { auth } from "../../firebase/fireConfig";

function SignIn() {
  function signinClick() {
    const email = "wenyuenchao@outlook.com";
    const password = "0123456";
    signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("sing in okay");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(error.code);
        console.log("sign in error");
        // ..
      });
  }
  return (
    <Container
    maxW="lg"
    py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        {<Logo />}
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
          >
            Log in to your user account
          </Heading>
          <Text color="fg.muted">
            Don't have an account? <Link href="/shopper/signup">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg.surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'md',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
           {<PasswordField />}
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={signinClick}>Sign in</Button>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            {<OAuthButtonGroup />}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  );
}

export default SignIn;
