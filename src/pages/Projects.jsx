import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaGoogleDrive } from "react-icons/fa";

import soldering from "../images/soldering.jpg";
import cnc from "../images/cnc.jpg";
import robotCar from "../images/Robot Car.jpg";
import smartHome from "../images/smart-home.jpg";
import portfolio from "../images/personal-portfolio.jpg";
import blindHardware from "../images/blind-hardware.jpg";
import blindProteus from "../images/blind-proteus.jpg";
import solid from "../images/solid.jpg";
import sneakerStore from "../images/shot-sneaker-store.jpg";
import paymentsStore from "../images/shot-payments-store.jpg";
import aiProducts from "../images/shot-ai-products.jpg";
import restaurantPos from "../images/shot-restaurant-pos.jpg";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1IvTskhR8zAkkadEv0DZ3EcS4bTmR4Yrv?usp=drive_link";

const DRIVE_EMBEDDED =
  "https://drive.google.com/drive/folders/1SIwP9Lb0r3mBJOGGr_5jDptvSghBQjlr?usp=sharing";

const DRIVE_MECHANICAL =
  "https://drive.google.com/drive/folders/10jUQACMVbql1DyBvWCDTuXT6BONGsCc0?usp=sharing";

const PORTFOLIO_LINK = "https://mohamed-portfolio-navn.vercel.app";

const GITHUB_LINK = "https://github.com/MohamedHappy226/mohamed-portfolio";

const SPRINTLY_LIVE = "https://sprintly-store-mohamedhappy226s-projects.vercel.app";

const GH = "https://github.com/MohamedHappy226";

const projects = [
  {
    title: "Graduation Project: Automated CNC Soldering Machine",
    image: soldering,
    tag: "GRADUATION",
    desc: "Automated CNC soldering and dispensing machine integrating mechanical design, embedded control, and automation concepts.",
    tech: ["CNC", "Arduino", "Embedded", "Mechanical"],
    folder: "/Projects/Graduation",
    drive: DRIVE_LINK,
    code: "",
    live: "",
  },
  {
    title: "CNC Mechanical System",
    image: cnc,
    tag: "MECHANICAL",
    desc: "Mechanical structure and motion system for the CNC soldering machine with practical manufacturing considerations.",
    tech: ["SolidWorks", "CNC", "Motion"],
    folder: "/Projects/Mechanical",
    drive: DRIVE_MECHANICAL,
    code: "",
    live: "",
  },
  {
    title: "Autonomous Robot Car",
    image: robotCar,
    tag: "ROBOTICS",
    desc: "Arduino-based robot car platform using motor driver, relay control, and sensors for movement and automation tasks.",
    tech: ["Arduino", "Robotics", "L298N", "Sensors"],
    folder: "/Projects/Embedded",
    drive: DRIVE_EMBEDDED,
    code: "",
    live: "",
  },
  {
    title: "Smart Home Automation System",
    image: smartHome,
    tag: "AUTOMATION",
    desc: "Bluetooth-based smart home automation using Arduino, HC-05 module, and relays to control lights and fans.",
    tech: ["Arduino", "HC-05", "Relay", "Automation"],
    folder: "/Projects/Automation",
    drive: DRIVE_EMBEDDED,
    code: "",
    live: "",
  },
  {
    title: "Smart Blind Stick",
    image: blindHardware,
    tag: "EMBEDDED",
    desc: "Assistive embedded system using sensors and electronics to help visually impaired users detect obstacles.",
    tech: ["Arduino", "Sensors", "Embedded"],
    folder: "/Projects/Embedded",
    drive: DRIVE_EMBEDDED,
    code: "",
    live: "",
  },
  {
    title: "Proteus Circuit Simulations",
    image: blindProteus,
    tag: "PROTEUS",
    desc: "Collection of electronic circuit simulations including motor drivers, embedded circuits, and control systems.",
    tech: ["Proteus", "Simulation", "Electronics"],
    folder: "/Projects/Embedded",
    drive: DRIVE_EMBEDDED,
    code: "",
    live: "",
  },
  {
    title: "SolidWorks Mechanical Designs",
    image: solid,
    tag: "SOLIDWORKS",
    desc: "Mechanical parts, assemblies, drawings, and design work created using SolidWorks.",
    tech: ["SolidWorks", "Assembly", "Drawing"],
    folder: "/Projects/Mechanical",
    drive: DRIVE_MECHANICAL,
    code: "",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    image: portfolio,
    tag: "FULL STACK",
    desc: "A complete responsive portfolio website fully designed and developed by me using React, Tailwind CSS, Node.js, MongoDB, and email integration.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    folder: PORTFOLIO_LINK,
    drive: DRIVE_LINK,
    code: GITHUB_LINK,
    live: PORTFOLIO_LINK,
  },
  {
    title: "Sprintly — Sneaker E-Commerce Store",
    image: sneakerStore,
    tag: "FULL STACK",
    desc: "A complete sneaker store built end to end: product catalog with filtering, product pages with size and colour options, a persisted cart, user accounts, and full order history backed by a relational database.",
    tech: ["Next.js", "React", "Prisma", "Tailwind", "Auth.js"],
    folder: SPRINTLY_LIVE,
    drive: "",
    code: `${GH}/sprintly-sneaker-store`,
    live: SPRINTLY_LIVE,
  },
  {
    title: "Online Payment Store & Checkout System",
    image: paymentsStore,
    tag: "PAYMENTS",
    desc: "An e-commerce store focused on the online payment flow — Stripe Checkout integration, secure card payments, webhook-driven order confirmation, and an order and invoice history for every customer.",
    tech: ["Next.js", "Stripe", "Webhooks", "Prisma", "PostgreSQL"],
    folder: `${GH}/maren-payment-store`,
    drive: "",
    code: `${GH}/maren-payment-store`,
    live: "",
  },
  {
    title: "AI Supermarket Product Classifier",
    image: aiProducts,
    tag: "AI / ML",
    desc: "A convolutional neural network that recognises supermarket products from a photo across 81 grocery items — naming the exact product, its product type, and its aisle. MobileNetV3 fine-tuned in PyTorch and served through a FastAPI REST API with a drag-and-drop demo showing live confidence scores.",
    tech: ["Python", "PyTorch", "CNN", "Transfer Learning", "FastAPI"],
    folder: `${GH}/market-vision-ai`,
    drive: "",
    code: `${GH}/market-vision-ai`,
    live: "",
  },
  {
    title: "Restaurant & Cafe Accounting System",
    image: restaurantPos,
    tag: "POS / ACCOUNTING",
    desc: "A point-of-sale and accounting system for restaurants and cafes: full menu management, order entry for dine-in, takeaway and delivery, printable invoices with discounts, service and tax, expense tracking, and daily sales and profit reports.",
    tech: ["Next.js", "Prisma", "SQLite", "Tailwind", "RTL Arabic"],
    folder: `${GH}/daftar-restaurant-pos`,
    drive: "",
    code: `${GH}/daftar-restaurant-pos`,
    live: "",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-14 text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-5xl font-black text-transparent">
          My Projects
        </h1>

        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

        <p className="mx-auto mt-5 max-w-3xl text-slate-400">
          A showcase of my engineering and software projects — embedded systems,
          robotics, automation, mechanical design and Proteus simulations, alongside
          full stack web apps, online payment systems, and AI computer-vision models.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#151515] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-cyan-500/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <span className="absolute left-5 top-5 rounded-full bg-white/30 px-5 py-2 text-xs font-black text-white backdrop-blur-md">
                {project.tag}
              </span>

              {(project.code || project.live) && (
                <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition duration-500 group-hover:opacity-100">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 text-xl text-white backdrop-blur-md transition hover:bg-cyan-400 hover:text-black"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 text-xl text-white backdrop-blur-md transition hover:bg-cyan-400 hover:text-black"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="p-6">
              <h2 className="mb-4 text-2xl font-black text-white">
                {project.title}
              </h2>

              <p className="mb-4 line-clamp-3 leading-7 text-slate-300">
                {project.desc}
              </p>

              <button className="mb-5 text-sm font-bold text-slate-400 transition hover:text-cyan-300">
                Read More⌄
              </button>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-5 text-slate-300">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-bold transition hover:text-cyan-300"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-bold transition hover:text-cyan-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}

                  {project.drive && (
                    <a
                      href={project.drive}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-bold transition hover:text-green-300"
                    >
                      <FaGoogleDrive /> Drive
                    </a>
                  )}
                </div>

                {project.folder && (
                  <a
                    href={project.folder}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-slate-400 transition duration-300 group-hover:translate-x-2 group-hover:text-cyan-300"
                  >
                    <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}