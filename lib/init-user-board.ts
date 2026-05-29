import connectDB from "./db";
import { Board, Column } from "./models";

const DEFAULT_COLUMN = [
        { name: "Wish List", order: 0, },
        { name: "Applied", order: 1, },
        { name: "Interviewing", order: 2, },
        { name: "Offer", order: 3, },
        { name: "Rejected", order: 4, }
];

export async function initializeUserBoard(user: string) {
        try {
                await connectDB();

                // 1. FIX: Change 'user' to 'userId' and remember to AWAIT it!
                const existingBoard = await Board.findOne({ userId: user, name: "Job Hunt" });
                if (existingBoard) {
                        return existingBoard;
                }

                // 2. FIX: Change 'user' to 'userId' here so Mongoose validation passes
                const board = await Board.create({
                        name: "Job Hunt",
                        userId: user,
                        columns: []
                });

                // Create default columns
                const columns = await Promise.all(DEFAULT_COLUMN.map((col) => Column.create({
                        name: col.name,
                        order: col.order,
                        boardId: board._id,
                        jobApplications: [],
                })));

                // Update the board with the new column ids
                board.columns = columns.map((col) => col._id);
                await board.save();

                return board;
        } catch (err) {
                throw err;
        }
}