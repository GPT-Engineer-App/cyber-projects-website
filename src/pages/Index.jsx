import React from "react";
import { Box, Heading, Text, VStack, Grid, Image, Link, Container, Button, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const projects = [
  {
    title: "Network Intrusion Detection System",
    description: "An AI-powered intrusion detection system that monitors network traffic for suspicious activities.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzEyMTAwMTg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Secure Password Manager",
    description: "A secure password manager that encrypts and stores user credentials.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXNzd29yZCUyMHNlY3VyaXR5fGVufDB8fHx8MTcxMjEwMDE4NHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Malware Analysis Toolkit",
    description: "A comprehensive toolkit for analyzing and detecting malware.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWx3YXJlJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzEyMTAwMTg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Secure File Transfer Protocol",
    description: "An implementation of a secure file transfer protocol using encryption.",
    image: "https://images.unsplash.com/photo-1504711331083-9c895941bf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBmaWxlJTIwdHJhbnNmZXJ8ZW58MHx8fHwxNzEyMTAwMTg1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Web Application Firewall",
    description: "A web application firewall that protects against common web attacks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNlY3VyaXR5fGVufDB8fHx8MTcxMjEwMDE4NXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Cryptographic Library",
    description: "A library of cryptographic algorithms for secure communication.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9ncmFwaHl8ZW58MHx8fHwxNzEyMTAwMTg1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          Cybersecurity Projects
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {projects.map((project, index) => (
            <Link key={index} href={project.link} _hover={{ textDecoration: "none" }}>
              <VStack p={6} borderWidth={1} borderRadius="lg" _hover={{ shadow: "md" }}>
                <Image src={project.image} alt={project.title} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </VStack>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
