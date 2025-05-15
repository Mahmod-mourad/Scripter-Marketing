# Script to update React version to 18.2.0
Write-Host "🚀 Starting React version update process..." -ForegroundColor Cyan

# Step 1: Check if pnpm is installed
try {
    $pnpmVersion = pnpm --version
    Write-Host "✅ pnpm is installed (version $pnpmVersion)" -ForegroundColor Green
} catch {
    Write-Host "❌ pnpm is not installed. Installing pnpm globally..." -ForegroundColor Yellow
    npm install -g pnpm
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install pnpm. Please install it manually using: npm install -g pnpm" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ pnpm installed successfully" -ForegroundColor Green
}

# Step 2: Stop any running development server
Write-Host "🛑 Stopping any running development server..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Step 3: Remove node_modules and lock file
Write-Host "🗑️  Removing node_modules and pnpm-lock.yaml..." -ForegroundColor Yellow
try {
    if (Test-Path "node_modules") {
        # Try to remove node_modules using rimraf (more reliable)
        npx rimraf node_modules
        if ($LASTEXITCODE -ne 0) {
            # Fallback to PowerShell Remove-Item
            Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
    if (Test-Path "pnpm-lock.yaml") {
        Remove-Item -Path "pnpm-lock.yaml" -Force -ErrorAction SilentlyContinue
    }
    Write-Host "✅ Successfully removed node_modules and pnpm-lock.yaml" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Warning: Some files could not be removed. You may need to close any applications using these files." -ForegroundColor Yellow
    Write-Host "Please try to manually delete node_modules and pnpm-lock.yaml" -ForegroundColor Yellow
    exit 1
}

# Step 4: Update package.json
Write-Host "📝 Updating package.json..." -ForegroundColor Yellow
try {
    $packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
    $packageJson.dependencies.react = "^18.2.0"
    $packageJson.dependencies."react-dom" = "^18.2.0"
    $packageJson.devDependencies."@types/react" = "^18"
    $packageJson.devDependencies."@types/react-dom" = "^18"
    $packageJson | ConvertTo-Json -Depth 100 | Set-Content "package.json"
    Write-Host "✅ Successfully updated package.json" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to update package.json: $_" -ForegroundColor Red
    exit 1
}

# Step 5: Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
try {
    pnpm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Successfully installed dependencies" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies: $_" -ForegroundColor Red
    exit 1
}

# Step 6: Start development server
Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
Write-Host "To start the development server, run: pnpm dev" -ForegroundColor Cyan
Write-Host "✅ React version update completed successfully!" -ForegroundColor Green 