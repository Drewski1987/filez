import db from "#db/client";
import { createFolder } from "./queries/folders.js"
import { createFile } from "./queries/files.js"

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
 const folder1 = await createFolder("City")

  await createFile({name: "Cleveland", size: 398598, folder_id: folder1.id })
  await createFile({name: "Charlotte", size: 833509, folder_id: folder1.id })
  await createFile({name: "Dallas", size: 1201556, folder_id: folder1.id })
  await createFile({name: "Columbia", size: 166987, folder_id: folder1.id })
  await createFile({name: "Pittsburg", size: 487564, folder_id: folder1.id })

  const folder2 = await createFolder("States")

  await createFile({name: "Ohio", size: 10349300, folder_id: folder2.id })
  await createFile({name: "North Carolina", size: 6567834, folder_id: folder2.id })
  await createFile({name: "Texas", size: 25576834, folder_id: folder2.id })
  await createFile({name: "South Carolina", size: 6453378, folder_id: folder2.id })
  await createFile({name: "Pennsylvania", size: 13084994, folder_id: folder2.id })

  const folder3 = await createFolder("Food")

  await createFile({name: "Corned Beef", size: 35, folder_id: folder3.id})
  await createFile({name: "BBQ Chicken", size: 25, folder_id: folder3.id})
  await createFile({name: "Brisket", size: 28, folder_id: folder3.id})
  await createFile({name: "Steak", size: 65, folder_id: folder3.id})
  await createFile({name: "Philly Cheese Steak", size: 22, folder_id: folder3.id})
}
