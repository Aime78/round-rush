import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const signOutUser = () => signOut(auth);

export default signOutUser;
