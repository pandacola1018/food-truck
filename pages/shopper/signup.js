import React from "react";
import {useState} from "react";
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
} from "@chakra-ui/react";
import { Logo } from "../component/Logo";
import { OAuthButtonGroup } from "../component/OAuthButtonGroup";
import { PasswordField } from "../component/PasswordField";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/fireConfig";
import Link from 'next/link';




function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  function signupClick() {
    //const email = "crazybrain1018@gmail.com";
    //const password = "0123456";
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("sing up okay");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("sign up error");
        // ..
      });
  }

  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          {<Logo />}
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: "xs",
                md: "sm",
              }}
            >
              Log in to your user account
            </Heading>
            <Text color="fg.muted">
              Already have an account? <Link href="signin">Sign in</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={{
            base: "transparent",
            sm: "bg.surface",
          }}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" onChange={handleEmailChange} value={email}/>
              </FormControl>
              <PasswordField onChange={handlePasswordChange} value={password}/>
            </Stack>

            <Stack spacing="6">
              <Button onClick={signupClick}>Sign up</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Signup;
