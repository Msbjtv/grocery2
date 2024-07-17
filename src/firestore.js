
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import { getUserId } from './Components/Utils/Utils';

const getCartCollection = () => {
  const userId = getUserId();
  return collection(db, `carts/${userId}/items`);
};

export const addItemToCart = async (item) => {
  const cartCollection = getCartCollection();
  await addDoc(cartCollection, item);
};

export const removeItemFromCart = async (id) => {
    const cartCollection = getCartCollection();
    const cartItems = await getDocs(cartCollection);
    const itemToRemove = cartItems.docs.find(doc => doc.data().id === id);
    if (itemToRemove) {
      await deleteDoc(doc(db, `carts/${getUserId()}/items`, itemToRemove.id));
    }
};

export const getCartItems = async () => {
  const cartCollection = getCartCollection();
  const snapshot = await getDocs(cartCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const updateCartItemQuantity = async (id, quantity) => {
    const cartCollection = getCartCollection();
    const cartItems = await getDocs(cartCollection);
    const itemToUpdate = cartItems.docs.find(doc => doc.data().id === id);
    if (itemToUpdate) {
      const itemRef = doc(db, `carts/${getUserId()}/items`, itemToUpdate.id);
      await updateDoc(itemRef, { quantity: Number(quantity) });
    }
  };
