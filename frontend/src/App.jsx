import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import { useAuth } from "./features/auth/hooks/useAuth.jsx";

const lngs = {
	en: { nativeName: "English" },
	se: { nativeName: "Svenska" },
};

function App() {
	const { user, setUser, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{!user ? (
				<LoginPage onLogin={setUser} />
			) : (
				<>
					<h2>Welcome, {user.username}</h2>
					<h3>Email: {user.email}</h3>
					<h4>Role: {user.role}</h4>
				</>
			)}
		</div>
	);
}

export default App;
