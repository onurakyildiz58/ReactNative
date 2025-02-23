import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('mydatabase.db');

export const createVideosTable = async () => {
  try {
    await db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS videos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, videoUri TEXT);'
      );
    });
    console.log("Videos table created or already exists.");
  } catch (error) {
    console.error('Error creating videos table', error);
  }
};

export const addVideo = async (title, description, videoUri) => {
  try {
    await db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO videos (title, description, videoUri) values (?, ?, ?);',
        [title, description, videoUri],
        (tx, result) => {
          console.log('Video added', result);
        },
        (tx, error) => {
          console.error('Error inserting video', error);
        }
      );
    });
  } catch (error) {
    console.error('Error adding video', error);
  }
};

export const fetchVideos = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM videos;',
        [],
        (tx, result) => {
          const videos = result.rows._array;
          resolve(videos);
        },
        (tx, error) => {
          reject('Error fetching videos', error);
        }
      );
    });
  });
};

export const updateVideo = async (id, title, description, videoUri) => {
  try {
    await db.transaction((tx) => {
      tx.executeSql(
        'UPDATE videos SET title = ?, description = ?, videoUri = ? WHERE id = ?;',
        [title, description, videoUri, id],
        (tx, result) => {
          console.log('Video updated', result);
        },
        (tx, error) => {
          console.error('Error updating video', error);
        }
      );
    });
  } catch (error) {
    console.error('Error updating video', error);
  }
};

export const deleteVideo = async (id) => {
  try {
    await db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM videos WHERE id = ?;',
        [id],
        (tx, result) => {
          console.log('Video deleted', result);
        },
        (tx, error) => {
          console.error('Error deleting video', error);
        }
      );
    });
  } catch (error) {
    console.error('Error deleting video', error);
  }
};
