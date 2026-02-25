import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import i18n from "./i18n";

const lngs = {
	en: { nativeName: "English" },
	se: { nativeName: "Svenska" },
};

function App() {
	const { t } = useTranslation();
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<div>
					{Object.keys(lngs).map((lng) => (
						<button
							key={lng}
							style={{
								fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
							}}
							type="submit"
							onClick={() => i18n.changeLanguage(lng)}
						>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					<Trans i18nKey="description.count">count is</Trans>
					{` ${count}`}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
