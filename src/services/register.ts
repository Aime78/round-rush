import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const register = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export default register;
