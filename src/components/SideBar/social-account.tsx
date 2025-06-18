import { socialAccounts } from './items';

export function SocialAccounts() {
  return (
    <div className="space-y-2">
      <h3
        className="text-xs font-semibold uppercase tracking-wider px-4"
        style={{ color: 'var(--sidebar-text)' }}
      >
        Social Accounts
      </h3>
      <div className="space-y-1 px-4">
        {socialAccounts.map((account) => (
          <div
            key={account.platform}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-3">
              {account.icon}
              <span
                className="text-sm"
                style={{ color: 'var(--sidebar-text)' }}
              >
                {account.platform}
              </span>
            </div>
            {account.status && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  account.status === 'NEW'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}
              >
                {account.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
