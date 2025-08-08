import { Job } from '../../types/cronjob.js';
/**
 * Retrieves all registered jobs.
 * Calling this function will also freeze the job manager, preventing any further mutations (register, remove).
 * @returns {Job[]} An array of all registered jobs.
 */
export declare function getAllJobs(): Job[];
/**
 * Retrieves all enabled jobs. An enabled job is one that has its `enabled` property set to true.
 * This function returns a new array containing only the jobs that are enabled. Calling this function
 * will also freeze the job manager, preventing any further mutations (register, remove).
 * @returns {Job[]} An array of enabled jobs.
 */
export declare function getEnabledJobs(): Job[];
/**
 * Registers a new job. This function is intended to be called during the
 * bootstrap phase of the application, before the job manager is frozen.
 * @param job - The job object to register.
 * @returns True if the job was successfully registered, false otherwise.
 * @throws Error if the job is invalid or if the manager is in a read-only state.
 */
export declare function registerJob(job: Job): boolean;
/**
 * Updates the schedule of an existing job. This function allows you to change
 * the cron schedule of a job. It is intended to be called during the bootstrap
 * phase of the application, before the job manager is frozen.
 * @param jobName - The name of the job to update.
 * @param newSchedule - The new cron schedule to set for the job.
 * @returns True if the job schedule was successfully updated, false otherwise.
 * @throws Error if the manager is in a read-only state.
 */
export declare function updateJobSchedule(jobName: string, newSchedule: string): boolean;
/**
 * Removes a job. This function supposed to be called from the bootstrap
 * phase of the application, before the job manager is frozen.
 * @param jobName - The name of the job to remove.
 * @returns True if the job was successfully removed, false otherwise.
 */
export declare function removeJob(jobName: string): boolean;
/**
 * Retrieves a job by its name.
 * @param jobName - The name of the job to retrieve.
 * @returns The job if found, undefined otherwise.
 */
export declare function getJob(jobName: string): Job | undefined;
/**
 * Checks if a job with the given name is registered.
 * @param jobName - The name of the job to check.
 * @returns True if the job is registered, false otherwise.
 */
export declare function hasJob(jobName: string): boolean;
