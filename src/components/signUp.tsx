'use client'
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/react';
import { signUp } from 'aws-amplify/auth';
import * as mutations from '@/graphql/mutations';

interface SignUpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpDialog: React.FC<SignUpDialogProps> = ({ isOpen, onClose }) => {
  const [corpId, setCorpId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  async function signUpAdmin(corpId: string, username: string, email: string, password: string) {
    try {
      await signUp({
        username: email,
        password: password,
        options:{
          userAttributes: {
            name: username,
            'custom:corpId': corpId,
            'custom:role': 'admin'
          }
        }
      });
      
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  }

  const handleSignUp = () => {
    signUpAdmin(
      corpId,
      username,
      email,
      password      
    )
    console.log('Signing up:', { username, email, password });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>サインアップ</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>会社名</FormLabel>
            <Input value={username} onChange={(e) => setCorpId(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>管理者名</FormLabel>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>パスワード</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSignUp}>
            サインアップ
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignUpDialog;
