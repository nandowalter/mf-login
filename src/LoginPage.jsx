import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-10"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://www.themaconsulting.ch/resources/testata_solutions_new.jpg"
            alt="MasterFinance Logo"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-2xl font-semibold text-gray-900 mt-4 tracking-tight">
            MasterFinance
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Capital Market & Treasury
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Inserisci la tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#74ccd6] focus:border-[#74ccd6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Inserisci la tua password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#74ccd6] focus:border-[#74ccd6]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3f51b5] hover:bg-[#344295] text-white text-md font-medium rounded-lg py-3 shadow-lg transition-colors"
          >
            Accedi
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#74ccd6] hover:underline">
              Password dimenticata?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}