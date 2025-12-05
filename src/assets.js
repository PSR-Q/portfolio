// ไฟล์นี้เก็บ path ของรูปภาพทั้งหมด โดยอ้างอิงจากโฟลเดอร์ public

export const assets = {
  // รูปภาพโปรเจกต์ (Project Screenshots)
  projects: {
    gasMonitor: "/n2_monitoring_screenshot.jpg",
    // เปลี่ยนเป็น Array เพื่อเก็บ 3 รูปสำหรับทำ Carousel
    productionSystem: [
      "/1.png", // รูป Dashboard
      "/2.png", // รูป Scan QR
      "/3.png"  // รูป Assigned Orders
    ],
    ZenGarden: [
      "/Zen1.jpg", // รูป Dashboard
      "/Zen2.png", // รูป Scan QR
      "/Zen3.png"  // รูป Assigned Orders
    ],
    pcbDesign: "/PNG_Schematic_Isolate-module-with-test-pin-v3_1.png",
  },
  
  // เอกสาร (Documents)
  docs: {
    zenGardenPdf: "/Computer_Vision_in_Robotic_Zen_Garden_Systems_An_Embedded_Approach_for_Contour_Detection_and_Pattern_Generation.pdf",
    MyResumePdf: "/My_Resume.pdf",
  },

  // โลโก้เทคโนโลยี (Tech Logos)
  logos: {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    mssql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    nodered: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodered/nodered-original.svg",
    postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    wordpress: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    sketchup: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/SketchUp_Logo_2020.svg/1024px-SketchUp_Logo_2020.svg.png"
  },

  // รูปสำหรับ Modal (Schematics)
  schematics: {
    optoIsolator: "/Opto_diagram.png",
  },
  profilePhoto: "/MyPicProfile.png",
};