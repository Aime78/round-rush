import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const signIn = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export default signIn;
