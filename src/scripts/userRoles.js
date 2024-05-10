//Import database
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

//User role values
export var ADMIN = 2
export var REVIEWER = 1
export var READER = 0

//Get admins list
let adminsRef = doc(db, "Roles", "Admin")
export const adminsSnap = await getDoc(adminsRef)
//Get reviewers list
let reviewersRef = doc(db, "Roles", "Reviewer")
export const reviewersSnap = await getDoc(reviewersRef)

/**
 * Returns the role of the current user. If the user is an admin, the function returns a 2,
 * If a reviewer returns 1, otherwise the user is not logged in and returns 0.
 * @param user current Firebase User
 * @returns int for user role. 2 for admin, 1 for reviewer, 0 for reader
 */
export function getRole(user, adminsSnap, reviewersSnap){
    if(user === null) return READER
    else if (adminsSnap.get(user.uid) !== undefined) return ADMIN
    else if (reviewersSnap.get(user.uid) !== undefined) return REVIEWER
    else return READER
}