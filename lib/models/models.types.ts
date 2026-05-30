/* Since im creating props interface in floatingboards.tsx, I need typescript types rather than mongoose types. Hence this file
   I have seen that it is pretty common in production grade applications */

export interface JobApplication {
        _id: string;
        company: string;
        position: string;
        location?: string;
        status: string;
        notes?: string;
        salary?: string;
        jobUrl?: string;
        order: number;
        columnId?: string;
        tags?: string[];
        description?: string;
}

export interface Column {
        _id: string;
        name: string;
        order: number;
        jobApplications: JobApplication[];
}

export interface Board {
        _id: string;
        name: string;
        columns: Column[];
}