// import { JwtPayload, verify } from 'jsonwebtoken';
// import { cookies } from 'next/headers';
// import { NextRequest } from 'next/server';

// export async function GET(request: NextRequest) {
//     const cookiesList = cookies();
//     const accessToken = cookiesList.get('accessToken')?.value as string;

//     if (!accessToken) {x
//         return showUnauthorizedError();
//     }

//     const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';

//     try {
//         await dbConnect();
//         const { id } = verify(accessToken, secretA) as JwtPayload;
//         const exists = await TokenModel.findOne({ userId: id });
//         if (!id || id.length !== 24 || !exists) {
//             return showUnauthorizedError();
//         }

//         return showStandardCustomResponse('Auth success!');
//     } catch (error) {
//         return showUnauthorizedError();
//     }
// }
