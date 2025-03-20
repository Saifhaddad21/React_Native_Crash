import { Client, Account, Avatars, Avatars, Databases, ID ,Query, Storage } from 'react-native-appwrite';
import signIn from '../app/(auth)/sign-in';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: 'com.jsm.aura',
    projectId: '67db16b6003913e129ce',
    databaseId: '67db18b80006d91306b1',
    userCollectionId: '67db18fb001f26f606d5',
    videoCollectionId: '67db19350017582fcda8',
    storageId: '67db1b4d00007df0d426'
}


const {
    endpoint,
    Platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = config;
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.Platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const Avatars = new Avatars(client);
const dataBases = new dataBases(client);
const storage = new Storage(client);


export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.creat(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;

        const avatarUrl = Avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await dataBases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await dataBases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}


export const getAllPosts = async () => {
    try {
        const Posts = await dataBases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt')]
        )
        return Posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const getLatestPosts = async () => {
    try {
        const Posts = await dataBases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        )
        return Posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const searchPosts = async (query) => {
    try {
        const Posts = await dataBases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.search('title', query)]
        )
        return Posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const getUserPosts = async (userId) => {
    try {
        const Posts = await dataBases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.equal('creator', userId)]
        )
        return Posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const signOut = async () => {
    try {
    const session = await account.deleteSession('current')
    
    return session;
    } catch (error) {
        throw new Error(error)
    }
}

export const getFilePreview = async (fileId, type) => {
    let fileUrl;

    try {
        if (type === 'video') {
            fileUrl = storage.getFileView(storageId, fileId)
        } else if (type === 'image') {
            fileUrl = storage.getFilePreview(storageId, fileId, 2000, 2000, 'top', 100)
        } else {
            throw new Error('Invalid file type')
        }

        if(!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

export const uploadFile = async (file, tipe) => {
    if (!file) return;

    const asset = {
        name: file.fileName,
        type: file.mimeType,
        size: file.fileSize,
        uri: file.uri,
    }

    
    try {
        const uploadFile = await storage.createFile(
            storageId,
            ID.unique(),
            asset
        );


        const fileUrl = await getFilePreview(uploadFile.$id, type);

        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

export const createVideo = async (form) => {
try {
    const [thumbnailUrl, videoUrl] = await Promise.all([
        uploadFile(form.thumbnail, 'image'),
        uploadFile(form.video, 'video'),
    ])

    const newPost = await Databases.createDocument(
        databaseId,
        videoCollectionId,
        ID.unique(),
        {
            title: form.title ,
            thumbnail: thumbnailUrl,
            video: videoUrl,
            prompt: form.prompt,
            creator: form.userId
        }
    )

    return newPost;
} catch (error) {
    throw new Error(error);
}
}