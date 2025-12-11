# DNS Configuration for Visual Studio Marketplace Verification

## TXT Record Configuration

To verify domain ownership for the Visual Studio Marketplace, you need to add a TXT record to your DNS configuration.

### Required TXT Record

**Hostname:** `_visual-studio-marketplace-agentdmitro.agentdmitro.github.io`  
**Record Type:** TXT  
**Value:** `c7e0cebb-6a49-4447-b4d8-ee993dc0ff79`  
**TTL:** 3600 (or your DNS provider's default)

### Steps to Add the TXT Record

1. Log in to your DNS provider (the service where your domain is registered or DNS is managed)
2. Navigate to the DNS management section
3. Add a new TXT record with the following details:
   - **Name/Host/Hostname:** `_visual-studio-marketplace-agentdmitro.agentdmitro.github.io` or `_visual-studio-marketplace-agentdmitro` (depending on your DNS provider's interface)
   - **Type:** TXT
   - **Value/Content:** `c7e0cebb-6a49-4447-b4d8-ee993dc0ff79`
4. Save the changes
5. Wait for DNS propagation (this can take up to 72 hours, but is often much faster)

### Verification

After adding the TXT record, you can verify it has propagated using:

```bash
# Linux/Mac
dig TXT _visual-studio-marketplace-agentdmitro.agentdmitro.github.io

# Windows (PowerShell)
Resolve-DnsName -Name _visual-studio-marketplace-agentdmitro.agentdmitro.github.io -Type TXT

# Online tools
# You can also use online DNS lookup tools like:
# - https://mxtoolbox.com/TXTLookup.aspx
# - https://dnschecker.org/
```

### Common DNS Providers

- **GitHub Pages Custom Domain:** If you're using a custom domain with GitHub Pages, configure this at your domain registrar
- **Cloudflare:** DNS → Records → Add Record
- **GoDaddy:** DNS Management → Add → TXT
- **Namecheap:** Advanced DNS → Add New Record
- **Google Domains:** DNS → Custom records → Manage custom records

### Notes

- DNS changes can take time to propagate globally
- Some DNS providers may require you to enter just the subdomain part (`_visual-studio-marketplace-agentdmitro`) instead of the full hostname
- Keep this TXT record in place for as long as you want the Visual Studio Marketplace verification to remain active
