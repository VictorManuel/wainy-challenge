# Wayni Challenge - Wallet App

Una aplicación de evaluacion construida para Wayni.

## 🚀 Características de la Aplicación

- **🏠 Página Principal**: Muestra balance, contactos recientes y últimas transacciones
- **👥 Perfil de Usuario**: Información detallada del usuario
- **💸 Transferencias**: Flujo completo de transferencias entre contactos
- **📋 Historial**: Lista de todas las transacciones realizadas
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **React Query** - Manejo de estado del servidor
- **Zustand** - Gestión de estado global
- **Tailwind CSS** - Estilos y diseño
- **ESLint** - Linting de código

## 📋 Requisitos 

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** como gestor de paquetes

## 🛠️ Instalación y Configuración

### **1. Clonar el repositorio**
```bash
git clone git@github.com:VictorManuel/wainy-challenge.git
cd wayni-challenge
```
`
### **2. Instalar dependencias**
```bash
npm install
# o
yarn install
```

### **3. Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en: **http://localhost:3000**

## 📁 Estructura de Carpetas y Archivos

```
wayni-challenge/
├── src/
│   ├── app/                          # Capa de Presentación (Next.js App Router)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx               # Layout principal de la aplicación
│   │   ├── page.tsx                 # Página principal (Home)
│   │   ├── providers.tsx            # Proveedores de contexto para 
│   │   ├── profile/
│   │   │   └── page.tsx             # Página de perfil de usuario
│   │   └── transfer/
│   │       ├── [contactId]/
│   │       │   └── page.tsx         # Página de transferencia a contacto
│   │       └── details/
│   │           └── [transferId]/
│   │               └── page.tsx     # Detalles de transferencia
│   │   └── transfers/
│   │       └── page.tsx             # Lista de transferencias
│   │
│   ├── lib/                         # Utilidades y constantes
│   │   ├── constants.ts             # Constantes de la aplicación
│   │   ├── formats.ts               # Funciones de formateo
│   │   ├── queryClient.ts           # Configuración de React Query
│   │   └── text.ts                  # Textos y traducciones
│   │
│   ├── queries/                     # Capa de Casos de Uso
│   │   ├── contacts.ts              # Queries para contactos
│   │   └── user.ts                  # Queries para usuario
│   │
│   ├── services/                    # Capa de Servicios Externos
│   │   └── randomUser.service.ts    # Servicio para API de usuarios
│   │
│   ├── store/                       # Capa de Gestión de Estado
│   │   ├── useContactsStore.ts      # Store para contactos
│   │   ├── useTransactionsStore.ts  # Store para transacciones
│   │   └── useUserStore.ts          # Store para usuario
│   │
│   ├── types/                       # Entidades y Tipos de Dominio
│   │   ├── transaction.ts           # Tipos de transacciones
│   │   └── user.ts                  # Tipos de usuario y contactos
│   │
│   └── ui/                          # Componentes de UI
│       ├── commons/                 # Componentes reutilizables
│       │   ├── Avatar.tsx
│       │   ├── BottomWhiteContainer.tsx
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── CurrencyInput.tsx
│       │   ├── Icon.tsx
│       │   ├── Input.tsx
│       │   ├── Skeleton.tsx
│       │   ├── Textarea.tsx
│       │   ├── TopBar.tsx
│       │   ├── TransactionItem.tsx
│       │   ├── TransactionItemWithAvatar.tsx
│       │   ├── TransactionItemWithIcon.tsx
│       │   └── TransactionsList.tsx
│       ├── home/                    # Componentes específicos de Home
│       │   ├── BalanceCard.tsx
│       │   ├── BalanceSkeleton.tsx
│       │   ├── ContactsSkeleton.tsx
│       │   ├── LastTransactions.tsx
│       │   ├── SendAgainList.tsx
│       │   ├── TransactionsSkeleton.tsx
│       │   ├── UserHeader.tsx
│       │   └── UserHeaderSkeleton.tsx
│       ├── layout/                  # Componentes de layout
│       │   └── NavBar.tsx
│       ├── profile/                 # Componentes de perfil
│       │   └── UserDetails.tsx
│       └── transfer-flow/           # Componentes de flujo de transferencia
│           └── AmountForm.tsx
│
├── eslint.config.mjs               # Configuración de ESLint
├── next.config.ts                  # Configuración de Next.js
├── package.json                    # Dependencias del proyecto
├── postcss.config.mjs              # Configuración de PostCSS
├── tsconfig.json                   # Configuración de TypeScript
└── README.md                       # Este archivo
```

## 🏛️ Arquitectura Limpia

### **Separación de Capas:**

1. **📁 `src/types/`** - **Entidades y Tipos de Dominio**
   - Contiene las definiciones de tipos que representan las entidades del negocio
   - Independiente de frameworks y tecnologías externas

2. **📁 `src/services/`** - **Lógica de Negocio y Servicios Externos**
   - Implementa la lógica de negocio y comunicación con APIs externas
   - Abstrae las dependencias externas

3. **📁 `src/store/`** - **Gestión de Estado (Capa de Aplicación)**
   - Maneja el estado global de la aplicación
   - Implementa los casos de uso de la aplicación

4. **📁 `src/queries/`** - **Casos de Uso y Orquestación**
   - Coordina entre la UI y los servicios
   - Maneja la lógica de obtención y transformación de datos

5. **📁 `src/ui/`** - **Capa de Presentación**
   - Componentes de interfaz de usuario
   - No contiene lógica de negocio

6. **📁 `src/lib/`** - **Utilidades y Constantes**
   - Funciones auxiliares y configuraciones
   - Constantes del sistema

## 🔧 Principios SOLID

### **1. Single Responsibility Principle (SRP) ✅**
- **`useUserStore`** - Solo maneja el estado del usuario
- **`useContactsStore`** - Solo maneja el estado de contactos
- **`useTransactionsStore`** - Solo maneja el estado de transacciones
- **`randomUser.service.ts`** - Solo maneja las llamadas a la API externa

### **2. Open/Closed Principle (OCP) ✅**
- Los componentes UI son extensibles sin modificación
- Los stores permiten agregar nuevas acciones sin cambiar la estructura existente

### **3. Liskov Substitution Principle (LSP) ✅**
- Los tipos `User` y `Contact` son consistentes

### **4. Interface Segregation Principle (ISP) ✅**
- `Contact` solo incluye las propiedades necesarias (`id`, `fullName`, `avatar`)
- Los stores tienen interfaces específicas para sus responsabilidades

### **5. Dependency Inversion Principle (DIP) ✅**
- Los componentes UI dependen de abstracciones (stores, queries)
- Los stores dependen de tipos, no de implementaciones concretas
- Las queries actúan como intermediarios entre UI y servicios

# ENUNCIADO

## Waynimovil React/NextJS Technical Challenge

### Objetivo
Desarrollar la aplicación **WayniWallet** utilizando React o NextJS, replicando el diseño proporcionado y simulando funcionalidades básicas de transferencias entre usuarios.

### Diseño
[Figma - WayniWallet](https://www.figma.com/design/ppzcbVZJLzYfEvw3Yokt9N/WayniWallet)

---

## Requerimientos Técnicos

### Configuración del Proyecto
- React (con Vite o Create React App) o Next.js  
- TypeScript  
- Hooks  
- Componentes funcionales  
- ES6+  

### Tecnologías Requeridas
- React / Next.JS  
- TypeScript  
- localStorage o IndexedDB  
- Tanstack/react-query  
- Zustand  
- Tailwind CSS  
- React Router o rutas de Next.js  

---

## Funcionalidades Principales

### 1. Home Screen
- Mostrar el nombre y avatar del usuario principal.  
- Visualizar el balance actual con persistencia en el dispositivo.  
- Listar contactos frecuentes para transferencias rápidas (mínimo 10 usuarios).  
  - Al seleccionar un contacto, redirige a la pantalla **Send Again** con su información.  
- Mostrar el historial de transacciones recientes con scroll.  
- Implementar **skeletons** para la carga de usuarios (*opcional, suma puntos extra*).  

### 2. Transfers Screen
[Figma - WayniWallet](https://www.figma.com/design/ppzcbVZJLzYfEvw3Yokt9N/WayniWallet)  

- Mostrar la lista de transferencias realizadas.  
- Visualizar avatar, nombre del destinatario, fecha y monto.  
- Filtrar transferencias por fecha (*opcional, suma puntos extra*).  

### 3. Profile Screen
- Mostrar información del usuario actual:  
  - Datos personales.  
  - Información de ubicación.  
  - Datos de contacto.  
  - ID único del usuario.  

---

## Entregable
1. Código fuente en un **repositorio Git público**.  
2. Archivo **README** con:  
   - Instrucciones claras para la instalación.  
   - Documentación sobre la arquitectura y tecnologías empleadas.  

---

## Notas
- Los datos del usuario principal y los contactos frecuentes deben obtenerse de la API [randomuser.me](http://randomuser.me/).  
- Se valorará el uso de **arquitectura limpia** y la implementación de principios **SOLID**.  
- Es fundamental mantener el código modular, reutilizable y bien estructurado.  
- Se premiará la creatividad y features extras en la implementación.  