import {Assignee} from './assignee.model';

export interface Issue {
  id: number;
  title: string;
  type: string;
  severity: string;
  description?: string;
  response?: string;
  assignee?: Assignee;
}

/**
 * The types of labels in Issue must follow the format of `Type`.`Value`.
 * Where `Type` represent the type of the label. (e.g. severity, type, response)
 * And `Value` represent the value that is associated to the `Type` (e.g. for severity Type, it could be Low, Medium, High)
 */
export const LABELS_IN_BUG_REPORTING = ['severity', 'type'];

export const SEVERITY_ORDER = { Low: 0, Medium: 1, High: 2 };
export const SEVERITIES = Object.keys(SEVERITY_ORDER);

export const ISSUE_TYPE_ORDER = { DocumentationBug: 0, FunctionalityBug: 1 };
export const ISSUE_TYPES = Object.keys(ISSUE_TYPE_ORDER);
