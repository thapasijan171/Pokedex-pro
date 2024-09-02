import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface HelloTemplateProps {
    name: string;
  }
  
  
  export const HelloTemplate = ({
    name,
  }: HelloTemplateProps) => (
    <Html>
      <Head />
      
      <Body style={main}>
        <Container style={container}>
          <Heading as="h2" style={heading}>Hello {name || ''},</Heading>
          <Text style={paragraph}>
            You message has been sent. You will get an response with 1-2 working days. Thank you for your message. 
          </Text>
         
          <Hr style={hr} />
          <Section>
            <Heading as="h3" style={footer}>Sijan Thapa</Heading>
            
          </Section>
          <Hr style={hr} />

          
        </Container>
      </Body>
    </Html>
  );
  

  
  export default HelloTemplate;
  
  const main = {
    backgroundColor: "white",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
 
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "black"
  };

  const heading = {
    color: "black",
  }
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
 const footer = {
  textAlign: "center" as const,
  color: "black"
 }