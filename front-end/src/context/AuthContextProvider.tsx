import { ReactNode, useContext, useEffect, useState }
    from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AuthContext from './AuthContext';
import { addIngredients } from '../services/ingredientService';
import { UserIngredientsObj } from '../models/UserIngredients';

function AuthContextProvider({children}: {children: ReactNode}) {
 const [ user, setUser ] = useState<User | null>(null);

 useEffect(() => { // useEffect to only register once at start
   return auth.onAuthStateChanged(newUser => {
     setUser(newUser);
   });
 }, []);

//  useEffect(() => {
    if (user) {
    const UserIngredients = UserIngredientsObj(user.uid);
    addIngredients(UserIngredients);
    }
// }});


 return (
   <AuthContext.Provider value={{ user }}>
     {children}
   </AuthContext.Provider>
 );
};
export default AuthContextProvider;