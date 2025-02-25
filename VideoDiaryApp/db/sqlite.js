import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("sevenApps.db");

export async function migrateDbIfNeeded(db) {
  await db.execAsync(`
      CREATE TABLE IF NOT EXISTS videos (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL, 
        description TEXT, 
        videoUri TEXT NOT NULL, 
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
  return 'Migration completed';
}

export async function fetchVideos() {
  return await db.getAllAsync("SELECT * FROM videos ORDER BY createdAt ASC;");
}

export async function fetchVideoById(id) {
  return await db.getFirstAsync("SELECT * FROM videos WHERE id = ?;", [id]);
}

export async function addVideo(title, description, videoUri) {
  return await db.runAsync(
    "INSERT INTO videos (title, description, videoUri) VALUES (?, ?, ?);",
    [title, description, videoUri]
  );
}

export async function updateVideo(id, title, description, videoUri) {
  return await db.runAsync(
    "UPDATE videos SET title = ?, description = ?, videoUri = ? WHERE id = ?;",
    [title, description, videoUri, id]
  );
}

export async function deleteVideo(id) {
  return await db.runAsync("DELETE FROM videos WHERE id = ?;", [id]);
}
