import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAvBlw1RHp7MXcnQp5ul9-VjFp0uo4tcNg",
	authDomain: "drive-clone-e2ca6.firebaseapp.com",
	projectId: "drive-clone-e2ca6",
	storageBucket: "drive-clone-e2ca6.appspot.com",
	messagingSenderId: "421590226067",
	appId: "1:421590226067:web:41385791154c0555002966",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
