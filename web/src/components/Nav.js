import React from "react";

const logo = require('../assets/img/logo.png');

const opciones = [
	{ value: 1, label: "Guardar y salir" },
	{ value: 2, label: "Salir sin guardar" },
	{ value: 3, label: "Guardar y continuar" }
]

export default function Navbar({ fixed }) {
  	const [navbarOpen, setNavbarOpen] = React.useState(false);

	const handleSelectOnChange = (e) => {
		const optClickeada = opciones.find(opt => opt.value === Number(e?.target?.value));
		console.log(`Opción: ${optClickeada.label} clickeada.`);
	}

	return (
		<nav className="relative flex flex-wrap items-center justify-between bg-gray-500">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a
						className="text-sm font-bold leading-relaxed inline-block mr-4 pt-1 whitespace-nowrap uppercase text-white"
						href="#"
					>
						<img
							className="w-15 h-12"
							alt="logo"
							src={logo}
						/>
					</a>
					<button
						className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
				>
					<select
						className="flex flex-col lg:flex-row list-none lg:ml-auto"
						onChange={handleSelectOnChange}
					>
						{opciones.map(opcion => (
							<option
								key={opcion.value}
								value={opcion.value}
							>
								{opcion.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</nav>
  	);
}