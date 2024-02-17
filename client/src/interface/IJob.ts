export interface IJob{
    
        jobType: string | null | undefined;
        category?: string | null | undefined;
        jobTitle: string | null;
        createdAt?: string | null;
        jobDescription: string | null;
        requirements?: any[];
        skills?: string[];
        salary?: string | null | undefined;
        status : boolean
        jobExpiry?: any;
        vacancy: string | number | null;
        noOfApplications?: number | null;
        _id?: string;
}