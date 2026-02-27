import { useState, useEffect, useCallback } from "react";
import { fetchUserProfile } from "../../../api/auth/profile.js";

export const useAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const refreshUser = useCallback(async () => {
		setLoading(true);
		try {
			const userData = await fetchUserProfile();
			setUser(userData);
			setError(null);
		} catch (err) {
			setUser(null);
			setError(err);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		refreshUser();
	}, [refreshUser]);

	return { user, setUser, loading, error, refreshUser };
};
